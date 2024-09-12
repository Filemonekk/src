type Props = {
    label: string;
    onClick: () => void
};

export const Button = ({ label, onClick }: Props) => {
    return (
        <button onClick={onClick} className="px-4 py-1 text-sm text-white bg-blue-600 rounded-full border border-blue-900">{label}</button>
    );
};