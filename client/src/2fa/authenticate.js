import {authenticator} from '@otplib/preset-default'
import qrcode from 'qrcode'
import base32 from './base32'
let secKey='';
let qrdata='';
let verifyStatus=false;

/*
This code exports two functions, auth2fa and verify2Fa.
auth2fa takes in a user and pass as parameters and returns a QR code data URL and a secret key that can be used to set up two-factor authentication (2FA) using the 
Time-based One-time Password (TOTP) algorithm. 
The function uses the @otplib/preset-default package to generate the secret key and QR code, as well as the qrcode and base32 packages.

verify2Fa takes in a token and secret as parameters and returns a boolean indicating whether the provided token is valid for the given secret.
The function uses the @otplib/preset-default package to verify the token using the TOTP algorithm.
*/

const reg2FaAuth=(user,pass)=>{
    const txt=pass.replace(/[^a-zA-Z0-9]/g,'')
    const start=parseInt(Math.random()*100)%64
    const secret=base32.toBase32(txt.slice(start,start+10))
    const otpauth=authenticator.keyuri(user,"VoteBlocks",secret)
    qrcode.toDataURL(otpauth,(err,data)=>{
        secKey=secret
        qrdata=data
    })
}

const check2FaAuth=(token,secret)=>{
    try{
        verifyStatus=authenticator.verify({token,secret})
        return verifyStatus
    }
    catch(err){
        console.log(err)
    }
}

export const auth2fa=(user,pass)=>{
    reg2FaAuth(user,pass)
    return [qrdata,secKey]
}

export const verify2Fa=(token,secret)=>{
    check2FaAuth(token,secret)
    return verifyStatus
}
