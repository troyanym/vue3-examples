import { h, defineComponent } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

export default defineComponent({
  name: 'text-code',
  props: {
    code: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: 'markup',
    },
  },
  setup(props, { slots, attrs, }) {
    const defaultSlot = (slots && slots.default && slots.default()) || [];
    const { inline, language } = props;
    const prismLanguage = Prism.languages[language];
    const className = `language-${language}`;
    let code =
      props.code || (defaultSlot && defaultSlot.length)
        ? defaultSlot[0].children
        : '';

    if (process.env.NODE_ENV === 'development' && !prismLanguage) {
      throw new Error(
        `Prism component for language "${language}" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/`
      );
    }

    code = code
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');

    return () => {
      if (inline) {
        return h('code', {
          class: [className],
          innerHTML: Prism.highlight(code, prismLanguage),
        });
      }

      return h(
        'pre',
        {
          ...attrs,
          class: [attrs.class, className],
        },
        [
          h('code', {
            ...attrs,
            class: [attrs.class, className],
            innerHTML: Prism.highlight(code, prismLanguage),
          })
        ]
      );
    };
  },
});
