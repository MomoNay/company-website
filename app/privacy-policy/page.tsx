import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | Orbit Drops LLC",
  description:
    "Learn how Orbit Drops LLC collects, uses, stores, and protects information.",
};

const sectionHeading = "font-serif text-2xl font-bold text-navy";
const paragraph = "leading-7 text-slate-700";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <header className="bg-[#0c2340] px-6 py-16 text-white sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Legal
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-white/70">
              Effective date: July 1, 2026
            </p>
          </div>
        </header>

        <article className="mx-auto max-w-3xl space-y-10 px-6 py-14 sm:py-20 lg:px-8">
          <p className={paragraph}>
            OrbitDrops LLC (&quot;OrbitDrops,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) operates e-commerce stores and
            internal tools for managing our own social media presence. This
            Privacy Policy explains what information we collect, how we use it,
            and the choices available to you.
          </p>

          <section className="space-y-4">
            <h2 className={sectionHeading}>1. Who we are</h2>
            <address className="not-italic leading-7 text-slate-700">
              OrbitDrops LLC
              <br />
              228 Park Ave S, New York, NY, 10003, United States
              <br />
              Contact:{" "}
              <a
                className="font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:text-accent-light"
                href="mailto:info@orbitdropsllc.com"
              >
                info@orbitdropsllc.com
              </a>
            </address>
          </section>

          <section className="space-y-4">
            <h2 className={sectionHeading}>2. Information we collect</h2>
            <p className={paragraph}>
              <strong className="font-semibold text-navy">
                From customers and website visitors.
              </strong>{" "}
              When you shop with us or visit our sites, we may collect your
              name, email address, shipping address, order details, and payment
              information (processed securely by our payment providers), along
              with standard technical data such as IP address and browser type.
            </p>
            <p className={paragraph}>
              <strong className="font-semibold text-navy">
                From connected social media accounts.
              </strong>{" "}
              We operate an internal tool that publishes our own product
              content to our own social media business accounts. When an account
              owner connects a Pinterest or Instagram account to this tool, we
              access and store, through the platform&apos;s official
              authorization (OAuth) process:
            </p>
            <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-700 marker:text-accent">
              <li>The account&apos;s username and account ID</li>
              <li>
                An access token (and refresh token, where applicable) that lets
                the tool publish content on that account&apos;s behalf
              </li>
              <li>
                The account&apos;s own boards and posts, only as needed to
                organize and publish content
              </li>
            </ul>
            <p className={paragraph}>
              The tool accesses only accounts that we own and have personally
              authorized. It does not access, collect, or store data belonging
              to any other Pinterest or Instagram users.
            </p>
            <p className={paragraph}>
              <strong className="font-semibold text-navy">Product data.</strong>{" "}
              The tool reads publicly available product information (titles,
              images, links, prices) from our own Shopify stores.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={sectionHeading}>3. How we use information</h2>
            <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-700 marker:text-accent">
              <li>
                To process and fulfill customer orders and provide customer
                support
              </li>
              <li>
                To create and publish product posts and pins to our own connected
                social media accounts, on a schedule we control
              </li>
              <li>
                To generate marketing captions (see &quot;Third-party
                services&quot; below)
              </li>
              <li>To operate, maintain, and improve our stores and tools</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className={paragraph}>We do not sell your personal information.</p>
          </section>

          <section className="space-y-4">
            <h2 className={sectionHeading}>4. Third-party services</h2>
            <p className={paragraph}>
              We share data with service providers only to the extent needed to
              run our business and this tool:
            </p>
            <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-700 marker:text-accent">
              <li>
                <strong className="font-semibold text-navy">
                  Pinterest and Meta (Instagram)
                </strong>{" "}
                — we use their official APIs to publish content to our connected
                accounts, in accordance with their platform terms and developer
                policies.
              </li>
              <li>
                <strong className="font-semibold text-navy">
                  Anthropic (Claude API)
                </strong>{" "}
                — product details (such as titles and types) are sent to
                generate marketing captions. No customer personal information
                is sent for this purpose.
              </li>
              <li>
                <strong className="font-semibold text-navy">Shopify</strong> —
                our stores and product data are hosted on Shopify.
              </li>
              <li>
                <strong className="font-semibold text-navy">
                  Payment processors and shipping carriers
                </strong>{" "}
                — to complete and deliver customer orders.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={sectionHeading}>5. Data storage and security</h2>
            <p className={paragraph}>
              Access tokens and related data used by our internal tool are
              stored securely on infrastructure we control, and access is
              restricted to authorized personnel. We use reasonable technical
              and organizational measures to protect information against
              unauthorized access, loss, or misuse. No method of transmission or
              storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={sectionHeading}>6. Data retention</h2>
            <p className={paragraph}>
              We retain information for as long as needed to provide our
              services and meet legal or accounting requirements. Social media
              access tokens are retained only while an account remains connected
              to our tool and are deleted when the account is disconnected or
              the connection is revoked.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={sectionHeading}>7. Your rights and choices</h2>
            <p className={paragraph}>
              Depending on your location, you may have the right to access,
              correct, or delete your personal information, or to object to or
              restrict certain processing (for example, under the GDPR or CCPA).
              You can exercise these rights by contacting us at{" "}
              <a
                className="font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:text-accent-light"
                href="mailto:info@orbitdropsllc.com"
              >
                info@orbitdropsllc.com
              </a>
            </p>
            <p className={paragraph}>
              <strong className="font-semibold text-navy">
                Disconnecting a social account.
              </strong>{" "}
              An account owner can revoke this tool&apos;s access at any time
              from the platform&apos;s own settings (Pinterest: Settings →
              Security and permissions → Apps; Instagram/Meta: Settings → Apps
              and websites), which immediately ends our ability to publish on
              that account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={sectionHeading}>8. Children&apos;s privacy</h2>
            <p className={paragraph}>
              Our services are not directed to children under 13 (or the minimum
              age required in your jurisdiction), and we do not knowingly
              collect their personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={sectionHeading}>9. Changes to this policy</h2>
            <p className={paragraph}>
              We may update this Privacy Policy from time to time. Material
              changes will be reflected by updating the &quot;Effective
              date&quot; above.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={sectionHeading}>10. Contact us</h2>
            <p className={paragraph}>
              Questions about this Privacy Policy or your data can be sent to:
              <br />
              OrbitDrops LLC —{" "}
              <a
                className="font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:text-accent-light"
                href="mailto:info@orbitdropsllc.com"
              >
                info@orbitdropsllc.com
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
