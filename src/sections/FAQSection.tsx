import Heading from "../components/Heading";
import QAComponent, { QAProps } from "../components/Q&A";

const questions: QAProps[] = [
    {
        question: "Why Choose our Market Place?",
        answer: "Our marketplace streamlines the cargo transportation process, reduces costs, and enhances trust between partners. With cutting-edge technology, we ensure seamless operations and an unparalleled logistics experience.",
    },
    {
        question: "How IoTex-DEPIN is used in Cargo Tracking?",
        answer: "Our marketplace streamlines the cargo transportation process, reduces costs, and enhances trust between partners. With cutting-edge technology, we ensure seamless operations and an unparalleled logistics experience.",
    },
    {
        question: "How Proof of Work is Validated?",
        answer: "Our marketplace streamlines the cargo transportation process, reduces costs, and enhances trust between partners. With cutting-edge technology, we ensure seamless operations and an unparalleled logistics experience.",
    },
    {
        question: "How blockchain adds Value to Cargo Transportation?",
        answer: "Our marketplace streamlines the cargo transportation process, reduces costs, and enhances trust between partners. With cutting-edge technology, we ensure seamless operations and an unparalleled logistics experience.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4 align-middle">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently asked Questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-1 place-items-center mt-6">
                {questions.map((prop, i) => (
                    <QAComponent key={i} {...prop}/>
                ))}
            </div>
        </section>
    );
}
