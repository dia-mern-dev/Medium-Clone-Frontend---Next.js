import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import React from "react";
import Button from "../../_ui/Button";

import { Menu, Transition } from "@headlessui/react";

import styles from "./styles.module.scss";

const AboutPage: React.FC = () => {
  const router = useRouter();
  const go = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    router.push("/", undefined, { scroll: false });
  };
  return (
    <div>
      <div className="container mx-auto">
        <Button className="mt-20 ml-20" onClick={go}>
          click here
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
