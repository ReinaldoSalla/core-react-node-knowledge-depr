interface SvgProps {
  height: string;
  width: string;
}

interface WrapperProps extends SvgProps {
  border: boolean;
}

export type {
  WrapperProps,
  SvgProps
};
