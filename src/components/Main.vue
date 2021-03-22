<template>
  <div id="contents">
    <article class="poem" v-for="poem in poems" :key="poem.id">
      <p v-text="poem.content" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      poems: [
        {
          id: 1,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea.',
          author: 'Someone',
          type: 'Something'
        },
        {
          id: 2,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Itaque optio temporibus in commodi, voluptates voluptatem!',
          author: 'Someone',
          type: 'Something'
        },
        {
          id: 3,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea.',
          author: 'Someone',
          type: 'Something'
        },
        {
          id: 4,
          title: 'The Title',
          content: 'Itaque optio temporibus in commodi, voluptates voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Itaque optio temporibus in commodi, voluptates voluptatem!',
          author: 'Someone',
          type: 'Something'
        },
        {
          id: 5,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Itaque optio temporibus in commodi, voluptates voluptatem!',
          author: 'Someone',
          type: 'Something'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .poem {
    width: 200px;
    background: antiquewhite;
    border-radius: 5px;
    padding: 5px;
  }
</style>
