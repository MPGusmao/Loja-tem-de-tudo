<template>
  <div class="ibm-band ibm-background-blue-70 ibm-padding-bottom-1 ibm-padding-top-1 ibm-alternate-background">
   	<div class="ibm-columns ibm-padding-bottom-0">
   		<div class="ibm-col-1-1">
   			<div class="ibm-padding-bottom-0 ibm-light">{{title}}</div>
   		</div>
   	</div>
  </div>
</template>

<script>

export default {
  name: 'FooterTitle',
  props: {
    title: {type: String, default: null},
  },
}
</script>
