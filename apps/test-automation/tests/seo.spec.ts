import { shouldHavePageTitle, clickContactButton } from "e2e-tests/tests/seo";

shouldHavePageTitle({ pageTitle: "Test Automation" });

clickContactButton();
