import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { useIntl } from "react-intl";

function FAQComp() {
  const [isOpen, setIsOpen] = useState(Array(5).fill(false));
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const intl = useIntl();

  const toggleAnswer = (index) => {
    setIsOpen((prev) => {
      const updatedState = [...prev];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggleQuestions = () => {
    setShowAllQuestions((prev) => !prev);
  };

  const faqs = [
    {
      questionId: "faq.question1",
      answerId: "faq.answer1",
    },
    {
      questionId: "faq.question2",
      answerId: "faq.answer2",
    },
    {
      questionId: "faq.question3",
      answerId: "faq.answer3",
    },
    {
      questionId: "faq.question4",
      answerId: "faq.answer4",
    },
    {
      questionId: "faq.question5",
      answerId: "faq.answer5",
    },
    {
      questionId: "faq.question6",
      answerId: "faq.answer6",
    },
    {
      questionId: "faq.question7",
      answerId: "faq.answer7",
    },
    {
      questionId: "faq.question8",
      answerId: "faq.answer8",
    },
    {
      questionId: "faq.question9",
      answerId: "faq.answer9",
    },
    {
      questionId: "faq.question10",
      answerId: "faq.answer10",
    },
    {
      questionId: "faq.question11",
      answerId: "faq.answer11",
    },
    {
      questionId: "faq.question12",
      answerId: "faq.answer12",
    },
    {
      questionId: "faq.question13",
      answerId: "faq.answer13",
    },
    {
      questionId: "faq.question14",
      answerId: "faq.answer14",
    },
    {
      questionId: "faq.question15",
      answerId: "faq.answer15",
    },
    {
      questionId: "faq.question17",
      answerId: "faq.answer17",
    },
    {
      questionId: "faq.question18",
      answerId: "faq.answer18",
    },
    {
      questionId: "faq.question19",
      answerId: "faq.answer19",
    },
    {
      questionId: "faq.question20",
      answerId: "faq.answer20",
    },
    {
      questionId: "faq.question21",
      answerId: "faq.answer21",
    },
    {
      questionId: "faq.question22",
      answerId: "faq.answer22",
    },
    {
      questionId: "faq.question23",
      answerId: "faq.answer23",
    },
    {
      questionId: "faq.question24",
      answerId: "faq.answer24",
    },
    {
      questionId: "faq.question25",
      answerId: "faq.answer25",
    },
    {
      questionId: "faq.question26",
      answerId: "faq.answer26",
    },
    {
      questionId: "faq.question28",
      answerId: "faq.answer28",
    },
    {
      questionId: "faq.question29",
      answerId: "faq.answer29",
    },
    {
      questionId: "faq.question30",
      answerId: "faq.answer30",
    },
    {
      questionId: "faq.question31",
      answerId: "faq.answer31",
    },
    {
      questionId: "faq.question32",
      answerId: "faq.answer32",
    },
    {
      questionId: "faq.question33",
      answerId: "faq.answer33",
    },
    {
      questionId: "faq.question34",
      answerId: "faq.answer34",
    },
    {
      questionId: "faq.question35",
      answerId: "faq.answer35",
    },
    {
      questionId: "faq.question36",
      answerId: "faq.answer36",
    },
    {
      questionId: "faq.question37",
      answerId: "faq.answer37",
    },
    {
      questionId: "faq.question38",
      answerId: "faq.answer38",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    intl
      .formatMessage({ id: faq.questionId })
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const visibleFaqs = showAllQuestions
    ? filteredFaqs
    : filteredFaqs.slice(0, 3);

  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-white lg:text-3xl">
          {intl.formatMessage({ id: "faq.title" })}
        </h1>
        <div className="mt-4 relative">
          <input
            type="text"
            className="w-full px-4 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 pl-10"
            placeholder={intl.formatMessage({ id: "faq.search" })}
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="absolute top-0 left-0 flex items-center h-full ml-3">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        <hr className="my-6 border-gray-700" />

        <div>
          {visibleFaqs.map((faq, index) => (
            <div key={index}>
              <button
                className="flex items-center focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <FaChevronDown
                  className={`flex-shrink-0 w-6 h-6 ${
                    isOpen[index] ? "transform rotate-180" : ""
                  } text-blue-500`}
                />
                <h1 className="mx-4 text-xl text-gray-300">
                  {intl.formatMessage({ id: faq.questionId })}
                </h1>
              </button>

              <AnimatePresence>
                {isOpen[index] && (
                  <motion.div
                    key={index}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="flex mt-8 md:mx-10">
                      <span className="border border-blue-500"></span>
                      <p className="max-w-3xl px-4 text-gray-400">
                        {intl.formatMessage({ id: faq.answerId })}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <hr className="my-8 border-gray-700" />
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button
              className="flex items-center space-x-2 text-gray-300 focus:outline-none"
              onClick={handleToggleQuestions}
            >
              <span>{showAllQuestions ? "" : ""}</span>
              {showAllQuestions ? (
                <FaChevronUp className="w-4 h-4" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQComp;
