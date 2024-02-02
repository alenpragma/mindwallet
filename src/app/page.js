import Link from "next/link";

export default function Home() {
  return (
    <div className='flex  h-screen place-content-center place-items-center'>
      <div className=' '>
        <p>Hello world</p>
        <Link href='/dashbord'>
          <button className='broder-1 bg-gray-600 rounded-sm border-gray-600 px-4 py-1'>
            Dashbord
          </button>
        </Link>
      </div>
    </div>
  );
}
