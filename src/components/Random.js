import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="md:w-full w-[100%] gap-5 p-5 bg-green-300 text-center flex flex-col justify-center items-center rounded-lg border-b-green-700 border-b-8 border shadow-lg">
      <h3 className="underline uppercase font-semibold">A Random GiF</h3>
      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="Gif File"
          className="overflow-hidden m-auto rounded-lg w-[400px] h-[310px]"
        />
      )}

      <button
        onClick={() => fetchData()}
        className="w-[90%] p-2 bg-slate-100 uppercase font-semibold rounded-lg shadow-md hover:bg-slate-300 active:bg-orange-300 duration-200"
      >
        Random generate
      </button>
    </div>
  );
};
export default Random;
