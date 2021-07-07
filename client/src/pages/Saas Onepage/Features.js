import React, { Component } from "react";
import { Container } from "reactstrap";


//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";

class Features extends Component {
  state = {
    features: [
      {
        id: 1,
        icon: 'uil uil-edit-alt h1 text-primary',
        title: "INVOICE GENERATOR",
        description:
          "Use the point and click payment page builder to create invoices without knowing how to program or code or using any technical skills at all!",
      },
      {
        id: 2,
        icon: 'uil uil-vector-square h1 text-primary',
        title: "ELECTRONIC INVOICING",
        description:
          "No more chasing payments or trying to collect from your customers. Send payment links along with your invoices to collect payment instally online!",
      },
      {
        id: 3,
        icon: 'uil uil-file-search-alt h1 text-primary',
        title: "SECURE PAYMENTS",
        description:
          "All payments are made through a secure API and PCI compliant using industry leading 256-bit SSL certificates!",
      },
      {
        id: 4,
        icon: 'uil uil-airplay h1 text-primary',
        title: "RECURRING BILLING",
        description:
          "Set up recuring payment schedules for any product or service and automatically receive payments each month!",
      },
      {
        id: 5,
        icon: 'uil uil-calendar-alt h1 text-primary',
        title: "MOBILE RESPONSIVE PAGES",
        description:
          "Send professionally designed, mobile responsive payment pages to your customers to instantly receive payment online.",
      },
      {
        id: 6,
        icon: 'uil uil-clock h1 text-primary',
        title: "SECURE UPDATES",
        description:
          "Unlimited feature updates with the PRO membership. PCI certified, secure payment pages and encrypted and protected by 256-SSL Encryption.",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          {/* section title */}
          <SectionTitle
            title="Great Features"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          {/* feature box */}
          <Feature featureArray={this.state.features} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
