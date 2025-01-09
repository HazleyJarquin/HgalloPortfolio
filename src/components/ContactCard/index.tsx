import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CustomButton } from "../CustomButton";
import { useTranslation } from "react-i18next";

export const ContactCard = () => {
  const { t } = useTranslation();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:exgallo85@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.open(mailtoLink, "_blank");

    setSubject("");
    setMessage("");
  };

  return (
    <Card className="w-full max-w-md bg-white">
      <CardHeader></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-black mb-1"
            >
              {t("SUBJECT_TEXT")}
            </label>
            <Input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full text-black"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black mb-1"
            >
              {t("MESSAGE_TEXT")}
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-black resize-none"
              rows={4}
              required
            />
          </div>

          <CardFooter>
            <CustomButton
              typeof="submit"
              text={t("SEND_BUTTON_TEXT")}
              mode="primary"
              className="w-full"
            />
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};
