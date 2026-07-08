import { forwardRef, type ReactNode } from "react";

interface SceneProps {
  id: string;
  height?: number;
  direction?: "vertical" | "horizontal";
  className?: string;
  children: ReactNode;
}

const Scene = forwardRef<HTMLElement, SceneProps>(function Scene(
  { id, height = 120, direction = "vertical", className = "", children },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id}
      className={`cine-scene cine-scene--${id} ${className}`}
      data-direction={direction}
      data-dwell={height - 100}
    >
      {children}
    </section>
  );
});

export default Scene;
