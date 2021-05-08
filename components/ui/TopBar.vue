<template>
  <section class="topbar">
    <div class="heading">
      <div class="title">
        <a href="#">
          <h1>ကဗျာ</h1>
        </a>
      </div>

      <div class="search">
        <div class="exteria">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            data-v-11a2f51e=""
            data-v-54483f86=""
            style="--sx: 1; --sy: 1; --r: 0deg"
          >
            <path
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              data-v-11a2f51e=""
            />
          </svg>
          <input type="text" name="search" />
        </div>
      </div>
    </div>

    <nav class="navigation">
      <li><a href="#">ကဗျာဆရာ</a></li>
      <li><a href="#">အမျိုးအစား</a></li>
      <li><a href="#">ခေတ်</a></li>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
.topbar {
  height: 70px;
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
  background: #fff;
  width: 100%;

  position: fixed;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  .heading {
    display: flex;
    align-items: center;

    .title {
      margin-right: 15px;

      a {
        color: orange;
      }
    }

    .search {
      .exteria {
        background: #eee;
        padding: 10px;
        border-radius: 25px;

        display: flex;

        &:hover {
          cursor: text;
        }

        svg {
          color: #444;
          fill: currentColor;
          margin-right: 7px;
        }

        input {
          background: none;
          font-size: 1em;
          min-width: 450px;
          border: none;
          outline: none;
          color: #444;
        }
      }
    }
  }

  .navigation {
    li {
      float: left;
      list-style: none;

      a {
        font-size: 1.1em;
        color: #444;
        margin: 0 3px;
        padding: 3px 5px;

        &:hover {
          color: orange;
        }
      }
    }
  }
}
</style>
