import { Button } from 'flowbite-react';
import React from 'react'
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from 'react-redux';

interface SecondarySideProps {
    showOrder: boolean;
    setShowOrder: (show: boolean) => void;
    }

const SecondarySide: React.FC<SecondarySideProps> = (props) => {
  
  const { showOrder, setShowOrder} = props;
  const ligaDetails = useSelector((state: any) => state.detailLeague);

  return (
    <div
      className={`lg:col-span-2  fixed top-0 bg-back2 w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full ">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-back1 rounded-full text-xl"
        />
        <div className="flex items-center gap-4 flex-wrap mb-8">
            <img src={ligaDetails.img}  alt="Logo" className="w-full h-34 rounded-lg" />
        </div>
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <p>{ligaDetails.description}</p>
        </div>
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
            Button 1
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Button 2
          </button>
          <Button> Hola</Button>
        </div>

      </div>
    </div>
  );
}

export default SecondarySide