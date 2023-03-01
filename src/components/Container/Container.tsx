import "./Container.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { PropsWithChildren } from "react";

interface IContainerProps {
  className?: string;
}

function Container({
  children,
  className,
}: PropsWithChildren<IContainerProps>) {
  const cn = classNames("container", className);
  return <div className={cn}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: "",
};
export default Container;
