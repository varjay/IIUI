<template>
  <demo-section background="#fff">
    <demo-block :title="$t('basicUsage')">
      <ii-card
        :title="$t('title')"
        :desc="$t('desc')"
        num="2"
        price="2.00"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ii-card
        :title="$t('title')"
        :desc="$t('desc')"
        num="2"
        price="2.00"
        :thumb="imageURL"
      >
        <div slot="footer">
          <ii-button size="mini">{{ $t('button') }}</ii-button>
          <ii-button size="mini">{{ $t('button') }}</ii-button>
        </div>
      </ii-card>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    };
  }
};
</script>
