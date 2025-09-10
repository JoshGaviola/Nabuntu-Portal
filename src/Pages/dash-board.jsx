import { images } from "../images/image";
import "../style/global.css";

const Dashboard = () => {
  return (
    <>
      {/* Header */}
      <div className="mt-10 ml-10">
        <p className="font-[Poppins] font-semibold text-[24px] text-[var(--primary)] laptop:text-[30px]">
          Welcum Back, Dawg!
        </p>
        <p className="text-[19px] laptop:text-[24px]">
          Kauna akong kinumo ug Love ko nimo - Lesther Bohol
        </p>
      </div>

      {/* Stats Boxes */}
      <div className="flex flex-col justify-center items-center mt-10 gap-6 tablet:flex-row laptop:flex-row ml-10">
        <div className="w-[200px] h-[90px] relative flex items-center gap-2 tablet:ml-3">
          <img src={images.course} alt="" className="w-13 mt-5" />
          <p className="absolute left-[60px] font-[Poppins] text-[20px] font-semibold text-black">
            4
          </p>
          <p className="mt-10 text-[var(--secondary)] font-sans whitespace-nowrap font-medium">
            Active Courses
          </p>
        </div>

        <div className="w-[200px] h-[90px] relative flex items-center gap-2">
          <img src={images.time} alt="" className="w-13  mt-5" />
          <p className="absolute left-[60px] font-[Poppins] text-[20px] font-semibold text-black">
            2
          </p>
          <p className="mt-10 text-[var(--secondary)] whitespace-nowrap font-medium">
            Due Tomorrow
          </p>
        </div>

        <div className="w-[200px] h-[90px] relative flex items-center gap-2">
          <img src={images.gpa} alt="" className="w-13 mt-5" />
          <p className="absolute left-[60px] font-[Poppins] text-[20px] font-semibold text-black">
            4.0
          </p>
          <p className="mt-10 text-[var(--secondary)] whitespace-nowrap font-medium">
            Current GPA
          </p>
        </div>

        <div className="w-[200px] h-[90px] relative flex items-center gap-2">
          <img src={images.completed} alt="" className="w-13 mt-5" />
          <p className="absolute left-[60px] font-[Poppins] text-[20px] font-semibold text-black">
            12
          </p>
          <p className="mt-10 text-[var(--secondary)] whitespace-nowrap font-medium">
            Completed
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-10 grid grid-cols-1 place-items-center gap-10 laptop:flex laptop:justify-center laptop:items-start laptop:gap-10">
        {/* Left - Current Courses */}
        <div className="w-[350px] h-[600px] border border-black-300 rounded bg-white px-8 py-5 laptop:w-[700px] flex flex-col tablet:w-[600px]">
          <p className="font-[Poppins] text-[15px]">Current Courses</p>
          <p className="font-[Poppins] text-[14px] text-[var(--secondary)]">
            Track your progress across all enrolled courses
          </p>

          <div className="grid grid-cols-1 place-items-center gap-5 mt-10 ">
            {/* Course 1 */}
            <div className="course-box border rounded px-4 py-3 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <div>
                    <p className="font-[Poppins] font-medium">
                      Introduction to Computing
                    </p>
                    <p className="text-[13px] text-gray-500">
                      CCE 101 • Prof. John Bisakol
                    </p>
                  </div>
                </div>
                <p className="text-[12px] font-medium text-gray-600">
                  75% Complete
                </p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-black h-2 rounded"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-[13px] mt-1">
                <p className="text-gray-600">Next: Project 3 (Due Sep 5)</p>
                <button className="text-[13px] font-medium text-[var(--secondary)]">
                  View
                </button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="course-box w-full h-[120px] border rounded px-4 py-3 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <div>
                    <p className="font-[Poppins] font-medium">
                      Differential Calculus
                    </p>
                    <p className="text-[13px] text-gray-500">
                      MTH 101 • Janjan Borloloy
                    </p>
                  </div>
                </div>
                <p className="text-[12px] font-medium text-gray-600">
                  60% Complete
                </p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-black h-2 rounded"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-[13px] mt-1">
                <p className="text-gray-600">
                  Next: How to Barang quiz (Due Sep 3)
                </p>
                <button className="text-[13px] font-medium text-[var(--secondary)]">
                  View
                </button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="course-box w-full h-[120px] border rounded px-4 py-3 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <div>
                    <p className="font-[Poppins] font-medium">
                      Differential Calculus
                    </p>
                    <p className="text-[13px] text-gray-500">
                      MTH 101 • Dr. Lesther Bohol
                    </p>
                  </div>
                </div>
                <p className="text-[12px] font-medium text-gray-600">
                  60% Complete
                </p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-black h-2 rounded"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-[13px] mt-1">
                <p className="text-gray-600">
                  Next: Product rule of (Due Sep 3)
                </p>
                <button className="text-[13px] font-medium text-[var(--secondary)]">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-1 place-items-center gap-5 mb-10">
          {/* Upcoming Assignments */}
          <div className="w-[350px] h-[330px] border border-black-300 rounded bg-white px-6 py-5 flex flex-col laptop:w-[550px] laptop:h-[330px] tablet:w-[600px] ">
            <p className="font-[Poppins] text-[15px] mb-3">
              Upcoming Assignments
            </p>
            <p className="text-[13px] text-[var(--secondary)] mb-5">
              Pag Bantay x2 Dawg
            </p>

            <div className="flex flex-col gap-3 flex-1">
              <div className="border rounded px-4 py-3 flex justify-between items-center">
                <p className="text-[14px]">
                  Assignment
                  <br />
                  <span className="text-[12px] text-gray-500">GE 10</span>
                </p>
                <span className="text-[12px] bg-orange-200 text-orange-800 px-3 py-1 rounded-full">
                  Tomorrow
                </span>
              </div>
              <div className="border rounded px-4 py-3 flex justify-between items-center">
                <p className="text-[14px]">
                  Yawa ni
                  <br />
                  <span className="text-[12px] text-gray-500">GE 10</span>
                </p>
                <span className="text-[12px] bg-orange-200 text-orange-800 px-3 py-1 rounded-full">
                  Sep 12
                </span>
              </div>
            </div>

            <button className="mt-4 w-full border rounded py-2 text-[13px] font-medium text-gray-600">
              View All Assignments
            </button>
          </div>

          {/* Announcements */}
          <div className="w-[350px] h-[250px] border border-black-300 rounded bg-white px-6 py-5 flex flex-col laptop:w-[550px] laptop:h-[250px] tablet:w-[600px]">
            <p className="font-[Poppins] text-[15px] mb-3">Announcements!</p>

            <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
              <div className="flex justify-between">
                <p className="text-[14px] font-medium">
                  Libreng Wifi
                  <br />
                  <span className="text-[12px] text-gray-500">
                    Sagingan sa UN
                    <br />
                    Dili man libre kay nag bayad man mog 500 sa wifi. Pero wala
                    day toy yawa
                  </span>
                </p>
                <span className="text-[12px] text-gray-500 whitespace-nowrap">
                  10 hours ago
                </span>
              </div>

              <div className="flex justify-between">
                <p className="text-[14px] font-medium">
                  CCE 101 - NO ROOM
                  <br />
                  <span className="text-[12px] text-gray-500">
                    UN Campus
                    <br />
                    No room to kay gipulihan tag mga bayot sa Psychology - John
                    Bisakol
                  </span>
                </p>
                <span className="text-[12px] text-gray-500 whitespace-nowrap">
                  69 hours ago
                </span>
              </div>
            </div>

            <button className="mt-4 w-full border rounded py-2 text-[13px] font-medium text-gray-600">
              View All Announcements
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
