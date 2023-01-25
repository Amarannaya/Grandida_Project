<<<
=======
**Project Title**

-AmmyVote

**Project Description**

- AmmyVote Dapp is a decentralised web 3.0 based online voting system which allow voters to vote securely and anonymously while maintaining privacy and transparency, built on the polygon blockchain

**Project Snapshot**
--- project snapshots
**Homepage
![homepage](https://user-images.githubusercontent.com/93910020/214582472-326439c7-2b67-4b4f-b085-7a061ce79e3e.png)

**Registration
![registration](https://user-images.githubusercontent.com/93910020/214582657-c59f1996-39e4-4f23-852f-def499ae142a.png)

** Login
![login](https://user-images.githubusercontent.com/93910020/214582728-2dbec387-6a2b-4205-8dec-f9d3576d0dbb.png)

**Help
![help](https://user-images.githubusercontent.com/93910020/214582797-67eaad76-96c9-432f-9e4d-b6336e3e49e1.png)


**Project Website Link**

- Live Site can be viewed at (https://ammyvote.netlify.app/)


**Project Author**

- Amarachi Peace Onah(Amarannaya)


****How to Install and Run the Project****

- Clone the repository
```git
git clone (https://github.com/Amarannaya/Grandida_Project)
```
* Enter client directory
```bash
cd client
```
* Install dependencies
```npm
npm install
```
* Run Project for development
```npm
npm run dev
```
* Run Project for production
```npm
npm run build
npm start
```

Additional Information:
* __Contract compilation__ : <br><br>
Use Remix Ethereum IDE or truffle migrate in vscode to compile and deploy.
Then copy the contract address and paste in 'client/src/config.js'.

* __Setup Infura__ : <br><br>
Before running the project, create an infura account and create a ipfs project.Grab the PROJECT_ID Key and API_KEY_SECRET Key.<br>Create a .env file in 'clients/' and paste the keys as:
```javascript
VITE_PROJECT_ID="your-project-id-key" //no space before and after =
VITE_API_KEY_SECRET="your-api-secret-key" //no space before and after =
```

🔮 Usage
To use this application as your own, follow these simple steps:

Fork this Repository (https://github.com/Amarannaya/Grandida_Project.git)

Install Dependecies (npm install)

Run Project (npm start)

## **Developer-centric options (if your project is open source)**

As a little deter, the contract address(Admin) has been hardcoded, users can only interact as voters.
you can write to the author for the admin access, it will granted.


🤝 Contribute
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated. 😊

 1. Fork Project

 2. Create your Feature Branch (git checkout -b feature/newFeature)

 3. Commit your changes(git commit -m "Add Some newFeature" )

 4. Push to the Branch (git push origin feature/newFeature)

 5. Open a Pull Request
 
**License**

MIT License

Copyright (c) 2023 Amarachi Peace Onah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
