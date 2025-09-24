import { Star } from "lucide-react";
import googleLogo from "@/assets/Google-Logo.png";
export function ReviewCard({ name, title, company, date, review, initial }) {
  return (
    <div className="bg-slate-100 flex flex-col justify-between shadow-md rounded-xl p-6 text-center space-y-4">
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-gray-700 text-sm">{review}</p>
      <div className="flex justify-center">
        <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center text-sm font-semibold">
          {initial}
        </div>
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">
          {title}, {company}
        </p>
      </div>
      <div className="">
        <p className="text-xs text-gray-400">Posted on {date}</p>
        <img src={googleLogo} alt="Google" className=" h-5 mx-auto" />
      </div>
    </div>
  );
}
