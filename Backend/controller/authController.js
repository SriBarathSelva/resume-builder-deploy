const User = require('../models/usermodels');
const Token = require('../models/tokenModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mailSender = require('../config/mailSender');
const Resume = require('../models/Resume');
const pdf = require('html-pdf-node');
const { generateResumeHTML1, generateResumeHTML2 } = require('../template/generateResumeHTML.html');
const axios = require('axios');


const registerUser = async (req, res) => {
    const { user, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(200).send({ success: false, msg: "User already exists" });
    } else {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(password, salt);
            const newEntry = await User.create({
                user: user,
                email: email,
                password: hashedpassword
            });

        
            await mailSender(newEntry, 'verify-mail');

            return res.status(200).send({ success: true, msg: "Registered successfully and verification mail has sent to your mail!" });
        } catch (error) {
            return res.status(400).send({ success: false, msg: "Error" });
        }
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                if(user.isVerified) {
                const tokenData = {
                    _id: user._id,
                    user: user.user,
                    email: user.email
                }
                const token = jwt.sign(tokenData, process.env.JWT_KEY, { expiresIn: '30d' });
                return res.status(200).send({ success: true, msg: "Login successful", token: token });
            } 
            else{
                return res.send({success:false,msg:"Email not verified,Please check your Mail!"})
            }
        }else {
                return res.status(200).send({ success: false, msg: "Invalid credentials" });
            }
        } else {
            return res.status(200).send({ success: false, msg: "Invalid credentials" });
        }
    } catch (error) {
        return res.send(error);
    }
};

const userData = async (req, res) => {
    try {
        res.status(200).send({ success: true, data: req.user });
    } catch (error) {
        res.status(400).send({ error });
    }
};

const updateUser = async (req, res) => {
    const { updateUser } = req.body;
    const email = updateUser.email;
    
    try {
        const user = await User.findOne({ email });
        
        if (user && (await bcrypt.compare(updateUser.cupassword, user.password))) {
            const salt = await bcrypt.genSalt(15);
            const hashedPassword = await bcrypt.hash(updateUser.password, salt);

            
            const updatedUser = await User.findByIdAndUpdate(user._id, {
                name: updateUser.name,
                email: updateUser.email,
                password: hashedPassword
            });

            if (!updatedUser) {
                return res.status(400).send({ msg: "Something went wrong" });
            }

            
            await mailSender(updatedUser, 'update-mail');

            return res.status(200).send({ success: true, msg: "Password updated successfully" });
        } else {
            return res.status(400).send({ msg: "No user or Something went wrong" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
};
const verifyMail = async (req, res) => {
    try {
        const tokenDetail = await Token.findOne({ token: req.body.token });
        if (tokenDetail) {
            await User.findOneAndUpdate(
                { _id: tokenDetail.userid }, // Filter by _id
                { $set: { isVerified: true } } // Update operation
            );
            await Token.findOneAndDelete({ token: req.body.token });
            res.send({ success: true, msg: "Email Verified successfully" });
        } else {
            res.send({ success: false, msg: "Invalid token" });
        }
    } catch (error) {
        res.send({ success: false, msg: "Internal Server Error", error: error.message });
    }
};

const createResume = async (req, res) => {
    try {
      const resume = new Resume(req.body);
      await resume.save();
  
      let generateResumeHTML;
  
      switch (req.body.template) {
        case 'template1':
          generateResumeHTML = generateResumeHTML2;
          break;
        case 'template2':
          generateResumeHTML = generateResumeHTML1;
          break;
        
        default:
          generateResumeHTML = generateResumeHTML1;
      }
  
      const options = { format: 'A4', printBackground: true };
      const file = { content: generateResumeHTML(req.body) };
  
      pdf.generatePdf(file, options).then(pdfBuffer => {
        res.set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename=resume.pdf',
          'Content-Length': pdfBuffer.length
        });
        res.send(pdfBuffer);
      }).catch(error => {
        console.error('PDF Generation Error:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
      });
  
    } catch (error) {
      console.error('Error Saving Resume:', error);
      res.status(400).json({ error: 'Failed to save resume' });
    }
  };
  
  
  
  
  


module.exports = { registerUser, loginUser, userData, updateUser , verifyMail,createResume};
