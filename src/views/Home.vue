<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Compute></Compute>

    <div>
      <l2>Name magician</l2>
      <nameMaster></nameMaster>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Compute from "@/components/compute.vue";
import nameMaster from "@/components/nameMaster.vue";

export default {
  name: "compute",
  components: {
    Compute,nameMaster
  }
};
</script>
