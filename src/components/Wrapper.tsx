interface WrapperProps {
	children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return <div className='max-w-[1400px] mx-auto px-4'>{children}</div>;
};
