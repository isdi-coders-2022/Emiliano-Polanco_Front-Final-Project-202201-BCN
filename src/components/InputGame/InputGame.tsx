import Highlight, { defaultProps } from "prism-react-renderer";

import defaultTheme from "prism-react-renderer/themes/nightOwlLight";

interface InputGameProps {
  text: string;
}
const InputGame = ({ text }: InputGameProps) => {
  return (
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
  );
};

export default InputGame;
