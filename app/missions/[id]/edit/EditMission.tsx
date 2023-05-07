"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { Mission } from "../../type";

type Props = {
  item: Mission;
};

const EditMission: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);
  const updateMission = useCallback(async () => {
    const res = await fetch(`/api/missions/${item.id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      alert("Mission Updated");
      router.push(`/missions/${item.id}`);
      router.refresh();
    } else {
      alert("Mission failed to update");
    }
  }, [body, item.id, router, title]);

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg relative p-5 gap-2.5">
      <div className="sm:col-span-2">
        <label
          htmlFor="title"
          className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
          Title
        </label>
        <input
          name="title"
          className="w-full bg-gray-50 text-gray-800 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="body"
          className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
          Body
        </label>
        <textarea
          name="body"
          className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-end gap-2.5">
        <Link
          href={`/missions/${item.id}`}
          className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-pink-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-2"
        >
          Cancel
        </Link>
        <button
          onClick={updateMission}
          className="inline-block bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus-visible:ring ring-pink-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditMission