<template>
  <f7-page class="contact" name="contact">
    <f7-navbar>
      <a class="link" href="/">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="chevron-left"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
            class=""
          ></path>
        </svg>
        <p>Contato</p>
      </a>
    </f7-navbar>
    <f7-block class="content-contact">
      <div class="content-contact-header">
        <h2> Mande um e-mail. <br>Ficaremos felizes em ajudá-lo(a). <span>&#128516;</span> </h2>
      </div>
      <!-- <a class="content-contact-card external" target="_blank" rel="noopener" href="https://api.whatsapp.com/send?phone=55031992936045">
        <div class="content-contact-card-wpp" >
          <div class="content-contact-card-wpp-text">
            <div class="content-contact-card-wpp-text-header">
              <h2>Whatssapp</h2>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" class=""></path></svg>
            </div>
            <div class="content-contact-card-wpp-text-telphone">
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.09 351.3L384.7 304.8a31.36 31.36 0 0 0-36.5 8.9l-44.1 53.9A350 350 0 0 1 144.5 208l53.9-44.1a31.35 31.35 0 0 0 8.9-36.49l-46.5-108.5A31.33 31.33 0 0 0 125 .81L24.2 24.11A31.05 31.05 0 0 0 0 54.51C0 307.8 205.3 512 457.49 512A31.23 31.23 0 0 0 488 487.7L511.19 387a31.21 31.21 0 0 0-18.1-35.7zM456.89 480C222.4 479.7 32.3 289.7 32.1 55.21l99.6-23 46 107.39-72.8 59.5C153.3 302.3 209.4 358.6 313 407.2l59.5-72.8 107.39 46z" class=""></path></svg>
              <p>+55 (031) 99293-6045</p>
            </div>
          </div>
          <div class="content-links-svg">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
          </div>
        </div>
      </a> -->
      <a class="content-contact-card external" @click="sendEmail()">
        <div class="content-contact-card-email">
          <div class="content-contact-card-email-text">
            <div class="content-contact-card-email-text-header">
              <h2>E-mail</h2>
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" class=""></path></svg>
            </div>
            <div class="content-contact-card-email-text-element">
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="at" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C118.941 8 8 118.919 8 256c0 137.058 110.919 248 248 248 52.925 0 104.68-17.078 147.092-48.319 5.501-4.052 6.423-11.924 2.095-17.211l-5.074-6.198c-4.018-4.909-11.193-5.883-16.307-2.129C346.93 457.208 301.974 472 256 472c-119.373 0-216-96.607-216-216 0-119.375 96.607-216 216-216 118.445 0 216 80.024 216 200 0 72.873-52.819 108.241-116.065 108.241-19.734 0-23.695-10.816-19.503-33.868l32.07-164.071c1.449-7.411-4.226-14.302-11.777-14.302h-12.421a12 12 0 0 0-11.781 9.718c-2.294 11.846-2.86 13.464-3.861 25.647-11.729-27.078-38.639-43.023-73.375-43.023-68.044 0-133.176 62.95-133.176 157.027 0 61.587 33.915 98.354 90.723 98.354 39.729 0 70.601-24.278 86.633-46.982-1.211 27.786 17.455 42.213 45.975 42.213C453.089 378.954 504 321.729 504 240 504 103.814 393.863 8 256 8zm-37.92 342.627c-36.681 0-58.58-25.108-58.58-67.166 0-74.69 50.765-121.545 97.217-121.545 38.857 0 58.102 27.79 58.102 65.735 0 58.133-38.369 122.976-96.739 122.976z" class=""></path></svg>
              <p>alphasoftwaresapps@gmail.com</p>
            </div>
          </div>
          <div class="content-links-svg">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
          </div>
        </div>
      </a>
    </f7-block>
  </f7-page>
</template>
<script>

export default {
  methods: {
    sendEmail() {
      window.location.href="mailto:alphasoftwaresapps@gmail.com";
    }
  }
};
</script>
<style lang="scss">
.contact {
  padding: 0px 0px 66px 0px;
  background: #f6f6f6;
  .navbar {
    &-bg {
      // background: #104069;
      background: #4169E1;
    }
    a {
      padding-left: 15px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-size: 18px;
        font-family: "Font Medium";
        color: #fff;
        margin-bottom: 0;
        padding-left: 5px;
        padding-top: 5px;
      }
      svg {
        width: 25px;
        height: 25px;
        fill: #fff;
      }
    }
  }
}
.content-contact {
  padding: 0px 15px;
  &-header {
    margin-bottom: 30px;
    text-align: center;
    h2 {
      font-size: 14px;
      font-family: 'Font Light';
      color: #000;
      margin-bottom: 0;
    }
  }
  &-card {
    display: block;
    padding: 20px 15px;
    border-bottom: 1px solid #cfcfcf;
    margin-bottom: 15px;
    background: #fff;
    .content-links-svg {
      width: 30px;
      height: 30px;
      background: linear-gradient(to bottom, #509ee0, #4169E1);
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        fill: #fff;
        width: 15px;
        height: 15px;
      }
    }
    &-wpp {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-text {
        &-header {
          display: flex;
          align-items: center;
          h2 {
            font-size: 18px;
            font-family: 'Font Light';
            color: #25D366;
            margin-bottom: 0;
          }
          svg {
            fill: #34af23;
            height: 25px;
            margin-left: 10px;
          }
        }
        &-telphone {
          display: flex;
          align-items: center;
          svg {
            fill: #707070;
            height: 15px;
            width: 15px;
            margin-right: 5px;
          }
          p {
            font-size: 14px;
            font-family: 'Font Light';
            color: #707070;
            margin-bottom: 0;
          }
        }
      }
    }
    &-email {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-text {
        &-header {
          display: flex;
          align-items: center;
          h2 {
            font-size: 18px;
            font-family: 'Font Light';
            color: #EA4335;
            margin-bottom: 0;
          }
          svg {
            fill: #EA4335;
            height: 22px;
            margin-left: 10px;
          }
        }
        &-element {
          display: flex;
          align-items: center;
          svg {
            fill: #707070;
            height: 15px;
            width: 15px;
            margin-right: 5px;
          }
          p {
            font-size: 14px;
            font-family: 'Font Light';
            color: #707070;
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>