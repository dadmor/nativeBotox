interface Props {
  label: string;
  value: string | number;
}
export const BlocksInfoRow: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="grid grid-cols-10 border-b text-gray-600 px-2">
      <div className="col-span-3 py-1">{label}</div>
      <div className="col-span-7 p-1">{value}</div>
    </div>
  );
};
