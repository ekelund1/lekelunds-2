<template>
  <ul>
    <li v-for="page in pages" :key="page.title">
      <router-link :to="page.route">{{ page.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navigator",
  data: () => ({
    pages: [
      { title: "Korpadalen", route: "/" },
      { title: "Notavalla", route: "/Notavalla" },
      { title: "Ringvägen", route: "/Ringvägen" },
      { title: "Asarums IP", route: "/AsarumsIP" },
      { title: "Södra änden", route: "/SödraLångasjön" },
    ],
  }),
};
</script>

AIzaSyC6Pc2048HP7n4I_4jzGEdd5xKcUFgp_-M
