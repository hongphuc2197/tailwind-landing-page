# Modern React Portfolio Website

This is a modern, responsive, and feature-rich portfolio website built with React, Vite, and Tailwind CSS. It's designed to showcase projects, skills, and experience in a professional and visually appealing way.

## Features

-   **Modern Tech Stack**: Built with React and Vite for a fast and efficient development experience.
-   **Component-Based Architecture**: Clean, reusable, and maintainable code structure.
-   **Responsive Design**: Fully optimized for all screen sizes, from mobile to desktop.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development and customization.
-   **Dark Mode**: Switch between light and dark themes for user comfort.
-   **Animations**: Smooth and subtle animations using `framer-motion` to enhance user experience.
-   **Contact Form**: Integrated with Google Apps Script for a serverless backend solution to handle form submissions.

## Tech Stack

-   **Frontend**: React, Vite
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Deployment**: Vercel/Netlify (or any other static site hosting)

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/hongphuc2197/tailwind-landing-page
    cd tailwind-landing-page
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Running the Development Server

To run the app in development mode, use the following command:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view it in the browser. The page will reload if you make edits.

### Building for Production

To create a production-ready build of the app, run:

```sh
npm run build
```

This will create a `dist` folder in the project root with the optimized and minified files ready for deployment.

## Configuration

### Contact Form

The contact form uses a Google Apps Script to send emails and store data in a Google Sheet.

1.  Create a new Google Sheet.
2.  Go to `Extensions > Apps Script`.
3.  Paste the code from `path/to/your/google-apps-script.gs` (you'll need to create this script). A sample script is provided below.
4.  Deploy the script as a web app, and make sure to give access to "Anyone, even anonymous".
5.  Copy the web app URL and paste it into the `fetch` request in `src/components/Contact.jsx`.

#### Sample Google Apps Script

```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.message
  ]);

  // Optional: Send an email notification
  MailApp.sendEmail("your-email@example.com", "New Contact Form Submission", JSON.stringify(data, null, 2));

  return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
}
```
---

This project was bootstrapped with Vite.