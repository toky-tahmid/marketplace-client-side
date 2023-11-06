

const MyBidCard = ({ job }) => {
  console.log(job);
  const { title, date, email } = job;
  return (
    <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="px-6 py-3 border-b border-gray-200">Header 1</th>
        <th className="px-6 py-3 border-b border-gray-200 hidden md:table-cell">Header 2</th>
        <th className="px-6 py-3 border-b border-gray-200 hidden lg:table-cell">Header 3</th>
        {/* <!-- Add more headers as needed --> */}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-6 py-4 border-b border-gray-200">Row 1, Column 1</td>
        <td className="px-6 py-4 border-b border-gray-200 hidden md:table-cell">Row 1, Column 2</td>
        <td className="px-6 py-4 border-b border-gray-200 hidden lg:table-cell">Row 1, Column 3</td>
        {/* <!-- Add more columns as needed --> */}
      </tr>
      {/* <!-- Add more rows as needed --> */}
    </tbody>
  </table>
</div>

  );
};

export default MyBidCard;
