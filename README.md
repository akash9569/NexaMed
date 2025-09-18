# NexaMed - E-commerce Pharmacy

![NexaMed Hero Image](https://picsum.photos/seed/readme-hero/1200/600)
*<p align="center">A modern e-commerce pharmacy application.</p>*

NexaMed is a modern, full-featured e-commerce pharmacy application built with Next.js, Firebase, and Genkit. It provides a seamless user experience for purchasing medications, booking health checkups, and accessing health-related information.

## Key Features

- **Product Catalog:** Browse and shop for medicines, personal care items, health devices, and more.
- **AI-Powered Search:** Quickly find medications and health conditions.
- **Shopping Cart & Checkout:** A complete and easy-to-use checkout process.
- **AI Health Records Analyzer:** Upload and get AI-powered summaries of your health records.
- **Doctor Appointments:** Find and book appointments with doctors.
- **Health Checkups:** Book various health checkup packages.
- **Content Pages:** Informative pages for About Us, Contact, and various health conditions.
- **User Authentication:** Login and Signup functionality.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) with App Router
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [ShadCN UI](https://ui.shadcn.com/) components
- **AI/Generative AI:** [Genkit](https://firebase.google.com/docs/genkit)
- **Database/Backend:** [Firebase](https://firebase.google.com/) (assumed for future integration)
- **Deployment:** Firebase App Hosting

## Getting Started

To get the project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nexamed.git
    cd nexamed
    ```

2.  **Install dependencies:**
    This command will install all the necessary packages defined in `package.json`.
    ```bash
    npm install
    ```

3. **Set up environment variables:**
   Create a `.env` file in the root of your project and add any necessary environment variables (e.g., Firebase config keys).
   ```
   # .env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   # ... other variables
   ```

4.  **Run the development server:**
    This will start the Next.js development server, and you can view the application.
    ```bash
    npm run dev
    ```

5.  **Open the application:**
    Navigate to `http://localhost:9002` in your browser to see the app in action.

## Exploring the Code

- `src/app/page.tsx`: The entry point for the homepage.
- `src/app/layout.tsx`: The main layout for the application.
- `src/lib/data.ts`: Contains the mock data for products, conditions, and doctors.
- `src/ai/flows/`: Home to the Genkit AI flows for features like health record analysis.
