import { Star } from "lucide-react";

export function ReviewCard({ name, title, company, date, review, initial }) {
  return (
    <div className="bg-slate-100 shadow-md rounded-xl p-6 text-center space-y-4">
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
        <p className="text-sm text-gray-500">{title}, {company}</p>
      </div>
      <p className="text-xs text-gray-400">Posted on {date}</p>
      <img src="https://tse3.mm.bing.net/th/id/OIP.SqEICC59PL1VrdefhGEqqgHaCg?pid=Api&P=0&h=180" alt="Google" className=" h-4 mx-auto" />
    </div>
  );
}
