# Frontend Mentor - Shortly URL shortening API Challenge solution by Eivind Simonsen

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![Design preview for the Shortly URL shortening API coding challenge](./design/desktop-preview.jpg)

### Links

- Live Site URL: [https://url-shortener-eas.netlify.app/](https://url-shortener-eas.netlify.app/)

## My process

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Specifically the setUrls state hook, where I learnt to store content in an array, by pushing a new object with the spread operator.

```JSX
const shortenUrl = async () => {
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
      const data = await response.json();

      // This code updates the shortUrl and the dom, without it the site breaks if nothing is fetched from the input
      setShortUrl(data.result.short_link);
      setUrls((prevUrls) => [...prevUrls, { longUrl, shortUrl: data.result.short_link }]);
      setLongUrl("");
      setErrorClasses(false);
    } catch (error) {
      setErrorClasses(true);
    }
  };
```

### Continued development

Store the values in the urls state to localStorage

## Author

- Website - [Eivind Simonsen](https://www.easimonsen.com/)
- Frontend Mentor - [@eivindsimonsen](https://www.frontendmentor.io/profile/eivindsimonsen)
- LinkedIn - [@eivindsimonsen](https://www.linkedin.com/in/eivind-simonsen-9469121b9/)

## Acknowledgments

ChatGPT for helping me with fixing bugs in the shortening component.
