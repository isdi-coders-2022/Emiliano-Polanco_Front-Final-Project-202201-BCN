import Highlight, { defaultProps } from "prism-react-renderer";
import { motion } from "framer-motion";
import defaultTheme from "prism-react-renderer/themes/nightOwlLight";

interface InputGameProps {
  text: string;
}
const InputGame = ({ text }: InputGameProps) => {
  return (
    <motion.div
      initial={{ scaleY: 0.7, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0.7 }}
      transition={{ duration: 0.2 }}
    >
      <Highlight
        {...defaultProps}
        theme={defaultTheme}
        code={text}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          return (
            <pre
              className={`${className} p-10 rounded-md shadow-md`}
              style={style}
            >
              {tokens.map((line, i) => {
                return (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })}
            </pre>
          );
        }}
      </Highlight>
    </motion.div>
  );
};

export default InputGame;
