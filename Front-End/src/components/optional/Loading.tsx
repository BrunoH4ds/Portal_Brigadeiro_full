"use client";

import { useState, useEffect } from "react";
import { IconAlertTriangle, IconError404, IconLoader } from "@tabler/icons-react";
import UnexpectedError from "./UnexpectedError";
import ErrorPage from "./NotFoundError";

export default function Loading() {
  const [dots, setDots] = useState("");
  const [failed, setFailed] = useState(false);

  // Animação dos pontos
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Timeout de falha (30 segundos)
  useEffect(() => {
    const timeout = setTimeout(() => setFailed(true), 15000);
    return () => clearTimeout(timeout);
  }, []);

  if (failed) {
    return (
      <UnexpectedError/>
    );
  }

  return (
    <div className="flex justify-center items-center rounded-md bg-white/50 backdrop-blur-md text-gray-800 mt-28 mb-8 mx-8">
      <div className="flex flex-col md:flex-row items-center p-5 gap-4">
        <div className="flex items-center justify-center animate-spin">
          <IconLoader size={100} stroke={1} />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Carregando{dots}
        </h1>
      </div>
    </div>
  );
}
