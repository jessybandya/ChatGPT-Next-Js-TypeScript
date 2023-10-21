'use client'

import { SunIcon, ExclamationTriangleIcon, BoltIcon } from "@heroicons/react/24/outline"

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen px-2 justify-center text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center flex-wrap justify-center">
      <div>
            <div>
              <div className="flex flex-col items-center justify-center mb-5">
                <SunIcon className="h-8 w-8" />
                <h2>Examples</h2>
              </div>

              <div className="space-y-2">
                <p className="infoText">"Virtual tutor for students."</p>
                <p className="infoText">"Creative writing partner for authors."</p>
              </div>
            </div>
        </div>

        <div>
            <div>
              <div className="flex flex-col items-center justify-center mb-5">
                <BoltIcon className="h-8 w-8" />
                <h2>Capabilities</h2>
              </div>

              <div className="space-y-2">
                <p className="infoText">"Answering questions."</p>
                <p className="infoText">"Natural language understanding."</p>
              </div>
            </div>
        </div>

        <div>
            <div>
              <div className="flex flex-col items-center justify-center mb-5">
                <ExclamationTriangleIcon className="h-8 w-8" />
                <h2>Limitations</h2>
              </div>

              <div className="space-y-2">
                <p className="infoText">"Common sense gaps."</p>
                <p className="infoText">"Potential for biased content."</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
