"use client";

import uFuzzy from "@leeoniya/ufuzzy";
import { useEffect, useRef, useState } from "react";

import "@/app/globals.css";
import { Input } from "@/components/ui/input";
import { Data } from "@/data";
import PromiseCard from "./promise-card";

export default function Search() {
  const state = useRef<{ fuzzy: uFuzzy; haystack: string[] }>();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number[]>();

  useEffect(() => {
    state.current = {
      fuzzy: new uFuzzy(),
      haystack: Data.promises.map(
        (p) => `${p.name} ${p.description} ${p.party} ${p.tags} ${p.date}`,
      ),
    };
  }, []);

  useEffect(() => {
    if (input.trim() === "") {
      setResult(undefined);
      return;
    }

    const [ids] = state.current!.fuzzy.search(state.current!.haystack, input);
    setResult(ids ?? []);
  }, [input]);

  let list;
  if (result == undefined) {
    list = Data.promises.map((p, i) => <PromiseCard key={i} promise={p} />);
  } else {
    list = result.map((idx) => (
      <PromiseCard key={idx} promise={Data.promises[idx]} />
    ));
  }

  return (
    <>
      <div className="container pt-4 px-4 md:px-6">
        <Input
          type="text"
          placeholder="Sök"
          className="mb-4"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
        />
        <div className="grid gap-4">{list}</div>
      </div>
    </>
  );
}
