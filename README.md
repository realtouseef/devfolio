# DevFolio ⚡️

## For Developers, By a Developer

A minimal and easy-to-tweak portfolio for developers made with [TailwindCSS](https://www.tailwindcss.com) and [NextJS](https://nextjs.org/). The best thing is, someone with a basic know-how of TailwindCSS and NextJS will be able to tweak it according to their needs.

## Live Version

Check out the Live Version here: [https://devpholio.vercel.app](https://devpholio.vercel.app).

## Table of Contents

- [Add your Info](#add-your-info)
- [For Contribution](#for-contribution)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)
- [Fonts And Icons](#font-and-icons)
- [Inspired from](#inspired-from)
- [License](#license)
- [Support](#-support)

## Add your Info

- Add your bio in `src/components/Card/ProfileCard.js`.
- Add/remove items in `navbar` from `src/components/Nav/NavItems.js`
- Add your data in `src/data/siteMetaData.js`
- Add your custom colors to `tailwind.config.js` and `src/styles/globals.css`
  PS: don't change the color names, if you want to then change them at other places as well
- Import your favorite font from `fonts.google.com` in `src/styles/globals.css`
- Add `.env` file in root and copy paste this: `NEXT_PUBLIC_GH_REPO_ENDPOINT=https://api.github.com/users/{your-username}/repos` but make sure to use your GitHub username.

## For Contribution

If you'd like to **contribute** and make this much better for other users, kindly fork it and feel free to open a [pull request](https://github.com/realtouseef/devfolio/pulls).

## How To Use

From your command line, clone and run devFolio:

```bash
# Clone this repository
git clone https://github.com/realtouseef/devfolio.git

# Go into the repository
cd devFolio

# Install dependencies
npm install
yarn install

# Start a local dev server
npm start
yarn dev
```

## Technologies Used

- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://www.tailwindcss.com)

## Font and Icons

- Fonts are taken from -- [Google Fonts](https://fonts.google.com)

- SVGs are taken from -- [Font Awesome](https://fontawesome.com/)

## Inspired from

- Idea inspired from - [DeveloperFolio](https://github.com/saadpasta/developerFolio)

- Design inspired from - [CodeWithAhsan](https://github.com/AhsanAyaz/code-with-ahsan)

## LICENSE
DevFolio is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.


## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️
