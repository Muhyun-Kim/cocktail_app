/**
 * Author : muhyun-kim
 * Modified : 2023/01/23
 * Function : 共通ローディング画面
 */

export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <div className="m-5">Please wait moment...</div>
      <div className="m-5 animate-spin h-10 w-10 border-4 border-black rounded-full border-t-transparent"></div>
    </div>
  );
}
