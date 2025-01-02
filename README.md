# Newsletter Signup App ✉️

This is a simple **newsletter signup application** built with **Node.js**, **Express**, and **Bootstrap**. The app allows users to sign up for a newsletter by providing their **first name**, **last name**, and **email address**. The app integrates with the **Mailchimp API** to manage the email subscriptions.

## Features 🚀

- User-friendly signup form with **Bootstrap** styling
- **Dark mode** support with a theme toggle 🌙
- Integration with **Mailchimp API** for managing email subscriptions
- **Success** and **failure** pages to inform users about the subscription status

## Prerequisites 🛠️

Before running this app, ensure you have the following:

- [Node.js](https://nodejs.org/) and **npm** installed on your machine
- A **Mailchimp** account and API key 🔑
- A **Mailchimp audience/list ID**
- A **Render** account for deployment 🌐

## Installation 💻

Follow these steps to install and run the app locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/newsletter-signup.git
   cd newsletter-signup
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your **Mailchimp API key** and **list ID**:

   ```
   API_KEY=your-mailchimp-api-key
   LIST_ID=your-mailchimp-list-id
   ```

4. Start the server:

   ```bash
   node app.js
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the signup form.

---

## Deployment on Render 🚀

1. Push your code to **GitHub** if not already done:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Create a web service in your **Render** Dashboard.

3. Link your GitHub repository to the web service.

4. Set up environment variables (`API_KEY` and `LIST_ID`) in the **Render** dashboard under the service's **Environment** tab.

5. Deploy the app. **Render** will automatically build and deploy your application.

6. Access your app via the URL provided by **Render**.

---

## Project Structure 🗂️

/newsletter-signup/
├── public/
│ ├── images/
│ │ └── logo.PNG
├── .env
├── app.js
├── signup.html
├── success.html
└── failure.html

- `public/`: Contains static files such as images.
- `.env`: Contains environment variables for the **Mailchimp API key** and **list ID**.
- `app.js`: The main server file that handles routes and integrates with the **Mailchimp API**.
- `signup.html`: The signup form page.
- `success.html`: The page displayed when the subscription is successful.
- `failure.html`: The page displayed when there is an error during subscription.

---

## Usage 📋

- **Signup Form**: Users can enter their first name, last name, and email address to sign up for the newsletter.
- **Form Submission**: When the form is submitted, the server sends the data to the **Mailchimp API**.
- **Success Page**: If the subscription is successful, the user is redirected to the success page.
- **Failure Page**: If there is an error during subscription, the user is redirected to the failure page.
- **Theme Toggle**: Users can switch between **light**, **dark**, and **auto** themes using the theme toggle button at the bottom right corner.

---

## License 📝

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements 🙏

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Mailchimp](https://mailchimp.com/)
- [Render](https://render.com/)
