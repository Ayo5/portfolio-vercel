import ProjectPage from "@/app/_components/ProjectPage";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const VisionFoodPage: React.FC = () => {
    const t = useTranslations("projects.visionFood");

    return (
        <ProjectPage
            title={t("title")}
            presentation={
                <>
                    {t("presentation")}
                </>
            }
            imageSrc="/projet/app_vision_food.png"
            imageAlt={t("imageAlt")}
            imageCaption={t("imageCaption")}
            objectifs={
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>{t("objectif.0")}</li>
                    <li>{t("objectif.1")}</li>
                    <li>{t("objectif.2")}</li>
                </ul>
            }
            technologies={
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.language")}</span> Python</li>

                </ul>
            }
            fonctionnalites={
                <>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>{t("features.0")}</li>
                        <li>{t("features.1")}</li>
                        <li>{t("features.2")}</li>
                        <li>{t("features.3")}</li>
                    </ul>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>{t("features.4")}</li>

                    </ul>
                </>
            }
            architecture={
                <>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        {t("architecture.description")}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>{t("architecture.dataProcessing.title") + " " + t("architecture.dataProcessing.description")}</li>
                        <li>{t("architecture.modelTraining.title") + " " + t("architecture.modelTraining.description")}</li>
                        <li>{t("architecture.prediction.title") + " " + t("architecture.prediction.description")}</li>
                        <li>{t("architecture.userInterface.title") + " " + t("architecture.userInterface.description")}</li>
                    </ul>
                </>
            }
            defis={
                <>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        {t("challenges")}
                    </p>
                </>
            }
            perspectives={
                <>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        {t("future")}
                    </p>
                </>
            }
            liens={
                <>
                    <ul className="list-disc pl-6 space-y-2 text-blue-700 dark:text-blue-400">
                        <li>
                            <Link href="https://github.com/KeskIA-Programme-S3/Roubaix_Predictive_Cantine" target="_blank" className="underline hover:text-blue-900 dark:hover:text-blue-200">
                                {t("links.github")}
                            </Link>
                        </li>
                    </ul>
                </>
            }
        />
    );
};

export default VisionFoodPage;