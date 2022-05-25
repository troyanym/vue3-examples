<template>
  <h1>Code prism</h1>
  <text-code
    language="html"
    :code="exampleToDoList"
  />
</template>

<script>
import TextCode from '@/components/text-code';
import { exampleToDoList } from '@/views/examples/codeExamples';

export default {
  name: 'code-prism',
  components: {
    TextCode,
  },
  data() {
    return {
      exampleToDoList,
    };
  },
};
</script>
