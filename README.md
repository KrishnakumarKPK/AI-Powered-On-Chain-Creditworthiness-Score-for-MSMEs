# 🌐 AI-Powered On-Chain Creditworthiness Score for MSMEs

## 📘 Project Overview

This project is a Decentralized Credit Scoring (DCS) platform tailored for Micro, Small, and Medium Enterprises (MSMEs) in India who do not have access to traditional credit.

### ❓ Why This Project?
Many MSMEs lack standardized credit histories and struggle to prove creditworthiness. This platform helps them access loans by generating a verifiable, blockchain-based credit score.

### ⚙️ How It Works
- 🧾 MSMEs upload business documents (such as hashed, anonymized invoices or payment records) to a secure off-chain system.
- 🤖 An external AI analyzes this data and calculates a risk score, without using KYC.
- 🪪 The credit score is issued as a non-transferable NFT/ASA (“Digital Credit Passport”) on the Algorand blockchain.
- 🏦 Lenders can instantly verify and query these scores, making lending safer and fairer for the informal sector.

### ⭐ Key Benefits
MSMEs can now build a trusted digital trail and unlock financial opportunities, while lenders access reliable, audit-ready data—promoting financial inclusion and transparency.
---

## Project Demonstration Video

Watch this detailed video walkthrough explaining the project, its features, and how it works:

[Watch our use-case video on Google Drive](https://drive.google.com/file/d/10aMNm4NQSFBDYL1MvbzBf7iPr4aiDmID/view?usp=drive_link)


> Click the above link to watch the full project demonstration video hosted on Google Drive.



---

## 🛠️ Setup & Installation Instructions

### 📌 Prerequisites

- 🐳 Docker must be installed and operational: [https://www.docker.com/](https://www.docker.com/)
- 🔧 AlgoKit CLI must be installed: [https://github.com/algorandfoundation/algokit-cli#install](https://github.com/algorandfoundation/algokit-cli#install)

### 🚀 Initial Setup

1. Clone this repository to your local machine:
git clone https://github.com/KrishnakumarKPK/AI-Powered-On-Chain-Creditworthiness-Score-for-MSMEs.git

cd AI-Powered-On-Chain-Creditworthiness-Score-for-MSMEs

2. Install AlgoKit CLI if not already installed (see above).

3. Set up the project environment, dependencies, and prepare `.env` files:
algokit project bootstrap all

4. For smart contract projects, generate the `.env.localnet` configuration file for the local network:
cd projects/MSME-contracts
algokit generate env-file -a target_network localnet
cd ../../

5. Build the entire project:

algokit project run build

6. For specific instructions, check the child project READMEs:
- Smart Contracts: `projects/MSME-contracts/README.md`
- Frontend Application: `projects/MSME-frontend/README.md`

### 🔄 Subsequent Updates

- If new dependencies are added in future source code updates, rerun:
algokit project bootstrap all


- Follow step 3 above again for environment setup.

### 🔁 Continuous Integration / Continuous Deployment (CI/CD)

- This project uses GitHub Actions for CI/CD, configured in the `.github/workflows` folder.
- Pushes to the `main` branch trigger:
- 🚀 Smart contract deployment to TestNet via AlgoNode.
- 🌐 Frontend deployment to your choice of host (Netlify, Vercel, etc.).
- Smart contract deployment uses the `algokit deploy` command, which can also be run locally.

For more information, refer to the [AlgoKit documentation](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/deploy.md).

---


## 🧾 Deployed Smart Contracts & Assets

At this stage, the smart contracts for the project have been fully developed, built, and tested using a local Algorand sandbox (AlgoKit LocalNet), but have not yet been deployed to a public testnet or mainnet. The following screenshots provide strong evidence of successful local development, setup, and contract compilation.

> When you deploy your contracts or assets to the Algorand TestNet or MainNet, their live links will be added in this section.

### 🧪 Local Deployment Walkthrough

The screenshots below represent a typical workflow for building and testing the smart contracts in a local development environment:

1. **LocalNet Startup:** All necessary services and Docker containers for Algorand sandbox are started and verified as healthy.
2. **Project Build:** The project and smart contracts are built and compiled with AlgoKit to ensure there are no errors before moving to production or testnet deployment.
3. **Sandbox and Build Validation:** The terminal logs and process health checks provide visible proof that the local setup, contract artifact creation, and complete project workflow are fully operational.

#### 🖼️ Screenshots of Successful Local Setup

<img src="https://drive.google.com/uc?export=view&id=1-i751-HFhU9nPErMY0w9VJWb70v5OyG3" width="600">
<img src="https://drive.google.com/uc?export=view&id=1C-Qh1CWk6yc9lp28XJMQUWwURB5vFdGa" width="600">
<img src="https://drive.google.com/uc?export=view&id=1iGHUhcdGrslVU-Ok858TmS8BKbl_Gexr" width="600">
<img src="https://drive.google.com/uc?export=view&id=1vmxT0bY4gHl7hvN3Z9eRy8L2wLKrkjWy" width="600">

> These images demonstrate the readiness of the project for public deployment by showing the essential localnet and build processes running smoothly.


---

## 🏗️ Architecture & Components

This section offers a brief overview of the overall solution design and the major components involved in building the AI-powered on-chain creditworthiness scoring system for MSMEs.

### 🔍 High-Level Architecture

The solution is structured as a modern full-stack decentralized application (dApp), supporting both backend smart contract logic and a user-facing frontend interface. Key architectural highlights are:

- **📦 Monorepo Structure:**  
  The project adopts a monorepo layout, encapsulating smart contract code, frontend code, and configuration within a unified repository for ease of development and deployment.

- **🧠 Smart Contracts:**  
  Written in Python using Algorand’s ARC-4 application architecture (via Algopy), the core logic resides in the `MSME-contracts` module.  
  - Responsible for MSME registration, on-chain storage of anonymized data proofs, and AI-based score recording.
  - Implements Algorand NFT/ASA logic to generate a “Digital Credit Passport” as a non-transferable, blockchain-native credential for each MSME.

- **🤖 Off-chain AI Service:**  
  External AI analyses the off-chain MSME business data submitted (e.g., invoices, bill payments) and generates a credit score.  
  - Credit score is securely sent on-chain for immutability and verifiability.

- **💻 Frontend Application:**  
  Built using React and Tailwind CSS, found in the `MSME-frontend` directory.
  - Enables MSMEs and lenders to interact with the application, upload documents, and view scores.
  - Integrates with the deployed smart contracts using application clients generated during the build process.

- **🐳 Docker & AlgoKit LocalNet:**  
  Docker containers orchestrate Algorand’s LocalNet for local blockchain simulation, making development and testing streamlined for all contributors.
  - AlgoKit simplifies localnet setup, builds, deployments, and supports smooth CI/CD integration.

### 🔗 Component Interactions

- Users interact with the frontend to register and upload business data.
- The backend registers MSMEs and associates data proofs on-chain.
- The external AI analyzes off-chain data and feeds back an on-chain credit score.
- Lenders can query scores publicly and verify MSME credit passports securely on-chain.

> For more details on code organization or customizing the solution, consult the child project READMEs under `/projects/MSME-contracts` and `/projects/MSME-frontend`.


---

## 🌐 Frontend Application Deployment

The frontend application of this project is deployed and accessible online, providing an intuitive web interface for MSMEs and lenders to interact with the credit scoring system.

- **Deployed Frontend Link:**  
  🔗 https://creditchain-rho.vercel.app/

This deployment is hosted on Vercel and connects to the underlying smart contracts on the Algorand blockchain, enabling real-time interactions and verifiable credit scoring.

Feel free to explore the application to see the project in action, submit data, and view credit scores generated by the AI-powered backend.

---
