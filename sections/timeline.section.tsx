export default function TimelineSection() {
    return (
        <section className="w-full">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <h2 className="heading font-bold font-jetbrains"><span className='font-jetbrains'>Development</span> Process</h2>
                <p className="font-jetbrains text-center mb-16 mx-auto mt-4 max-w-6xl">
                    From planning to launch, I ensure a seamless and effective development journey
                </p>
                <ul className="mx-auto mt-12 grid grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-4">
                    <li className="flex-start group relative flex lg:flex-col">
                        <span
                            className="absolute left-[19px] top-[5.7rem] h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[27px] lg:h-px lg:w-[calc(100%_-_72px)]"
                            aria-hidden="true"></span>
                        <div
                            className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border bg-[--main-color] transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                            <i className="bx bx-calendar-check text-4xl"></i>
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mt-10">
                            <h3
                                className="text-3xl font-bold font-jetbrains">
                                Planning
                            </h3>
                            <h4 className="mt-2 font-jetbrains text-[1.6rem]">Collaborate to understand requirements and goals.</h4>
                        </div>
                    </li>
                    <li className="flex-start group relative flex lg:flex-col">
                        <span
                            className="absolute left-[19px] top-[5.7rem] h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[27px] lg:h-px lg:w-[calc(100%_-_72px)]"
                            aria-hidden="true"></span>
                        <div
                            className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border bg-[--main-color] transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                            <i className="bx bx-code-block text-4xl"></i>
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mt-10">
                            <h3
                                className="text-3xl font-bold font-jetbrains">
                                Execution
                            </h3>
                            <h4 className="mt-2 font-jetbrains text-[1.6rem]">Develop and implement solutions with precision.</h4>
                        </div>
                    </li>
                    <li className="flex-start group relative flex lg:flex-col">
                        <span
                            className="absolute left-[19px] top-[5.7rem] h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[27px] lg:h-px lg:w-[calc(100%_-_72px)]"
                            aria-hidden="true"></span>
                        <div
                            className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border bg-[--main-color] transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                            <i className="bx bx-check text-4xl"></i>
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mt-10">
                            <h3
                                className="text-3xl font-bold before:mb-2 font-jetbrains">
                                Testing
                            </h3>
                            <h4 className="mt-2 font-jetbrains text-[1.6rem]">Ensure functionality, performance, and quality.</h4>
                        </div>
                    </li>
                    <li className="flex-start group relative flex lg:flex-col">
                        <div
                            className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border bg-[--main-color] transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                            <i className="bx bx-rocket text-4xl"></i>
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mt-10">
                            <h3
                                className="text-3xl font-bold before:mb-2 font-jetbrains">
                                Launch
                            </h3>
                            <h4 className="mt-2 font-jetbrains text-[1.6rem]">Deploy and maintain your solution for optimal performance.</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}