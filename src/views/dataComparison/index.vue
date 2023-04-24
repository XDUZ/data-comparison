<template>
    <div class="container">
      <div class="header">
        <div class="header-title">数据对比</div>
        <div class="header-search">

        </div>
      </div>
      <div class="body">
      </div>
    </div>
</template>

<script>
export default {
  name: 'DataComparison',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },

};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  background: #fff;
  border-radius: 4px;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  .header {
    font-size: 16px;
    color: #222;
    letter-spacing: 0;
    font-weight: 400;
    padding-bottom: 16px;
    line-height: 24px;

    &-title::before {
      display: inline-block;
      margin-left: 10px;
      margin-right: 12px;
      width: 4px;
      height: 16px;
      background: #1d70f5;
      content: "";
      vertical-align: -2px;
    }

    &-search {

    }
  }

  .body {

  }
}
</style>
