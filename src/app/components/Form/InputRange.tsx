import { ForwardRefRenderFunction, forwardRef } from 'react'
interface IInput {
  title: string;
  className?: string;
}
const InputBase: ForwardRefRenderFunction<
  HTMLInputElement & HTMLTextAreaElement,
  IInput
> = ({ title, className, ...rest }, ref) => {
  return (
    <div className={`mb-4 text-blue-900 font-medium ${className}`}>
      <label>{title}</label>
      <input
        className={`w-full px-6 py-[5px] mt-2 bg-white rounded-lg border border-teal-400`}
        type='range'
        min={0}
        max={100}
        ref={ref}
        {...rest}
      />
    </div>
  );
};
export const InputRange = forwardRef(InputBase);