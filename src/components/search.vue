<template>
  <div class="content-search">
    <div class="content-search-itens">
      <div class="content-input">
        <input
          type="search"
          name="input-search"
          value=""
          v-on:input="updateFilter"
          placeholder="Busque: ex: dicas de beleza"
          required
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26.004"
          height="26.079"
          viewBox="0 0 26.004 26.079"
        >
          <g transform="translate(-0.49 -0.001)">
            <path
              d="M26.166,22.409l-6.244-6.45c-.448-.463-1.007-.648-1.25-.411s-.8.05-1.251-.413l-.089-.093A9.352,9.352,0,1,0,15.719,16.7l.039.041c.447.463.613,1.028.369,1.264s-.078.8.371,1.263l6.241,6.453a1.167,1.167,0,0,0,1.649.027l1.751-1.695A1.168,1.168,0,0,0,26.166,22.409ZM14.439,13.949a6.464,6.464,0,1,1,0-9.141A6.472,6.472,0,0,1,14.439,13.949Z"
              fill="#4169E1"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateFilter(event) {
      this.$store.commit('SET_SEARCH_TIPS', event.target.value.toLowerCase())
    }
  }
}
</script>

<style lang="scss">
.content-search {
	position: fixed;
	width: 100%;
	top: 56px;
	z-index: 2;
	background: #fff;
	box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.05);
  &-itens {
    .content-input {
      position: relative;
      input {
        height: 50px;
        width: 100%;
        border: 1px solid hsla(0, 0%, 82%, 0.3);
        padding: 0px 50px 0px 20px;
        outline: none;
        font-size: 16px;
        font-family: 'Font Regular';
        color: rgba(6, 13, 26, 0.4);
      }
      svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>