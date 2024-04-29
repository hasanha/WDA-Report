import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import chart from "../b0ba80ee-0716-4c84-afa5-8b18c05cdb40.png";
import revenue from "../download.png";
import qty from "../qty.png";
import totalSale from "../totalSales.PNG";
import totalQty from "../totalQty.PNG";
import salesByCity from "../saleByCity.png";

const PerformanceOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="m-3 "
    >
      <Card className="m-3 ">
        <div className="performance-overview">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-3 m-2"
          >
            <h2>The main titles in this report</h2>
            <p>
              <ol>
                <li>
                  <b>Compute metrics for each product:</b> Total revenue
                  generated, total units sold, average price per unit, and total
                  number of orders.
                </li>
                <li>
                  <b>Rank products: </b> based on these metrics and provide
                  recommendations on focus areas.
                </li>
                <li>
                  <b>Compute monthly metrics </b> and plot them to identify
                  trends.
                </li>
                <li>
                  <b>Identify top 5 cities </b> with the highest sales and
                  provide strategic insights.
                </li>
              </ol>
            </p>
            <h2>Rank products</h2>
            <ol>
              <li className="mt-2">
                Product Code S18_3232
                <ul>
                  <li>Total Revenue: $288,245.42</li>
                  <li>Total Units Sold: 1774</li>
                  <li>Average Price Per Unit: $99.05</li>
                  <li>Total Orders: 52</li>
                </ul>
              </li>
              <li className="mt-2">
                Product Code S10_1949
                <ul>
                  <li>Total Revenue: $191,073.03</li>
                  <li>Total Units Sold: 961</li>
                  <li>Average Price Per Unit: $100.00</li>
                  <li>Total Orders: 28</li>
                </ul>
              </li>
              <li className="mt-2">
                Product Code S10_4698
                <ul>
                  <li>Total Revenue: $170,401.07</li>
                  <li>Total Units Sold: 921</li>
                  <li>Average Price Per Unit: $98.59</li>
                  <li>Total Orders: 26</li>
                </ul>
              </li>
              <li className="mt-2">
                Product Code S12_1108
                <ul>
                  <li>Total Revenue: $168,585.32</li>
                  <li>Total Units Sold: 973</li>
                  <li>Average Price Per Unit: $93.95</li>
                  <li>Total Orders: 26</li>
                </ul>
              </li>
              <li className="mt-2">
                Product Code S18_2238
                <ul>
                  <li>Total Revenue: $154,623.95</li>
                  <li>Total Units Sold: 966</li>
                  <li>Average Price Per Unit: $99.56</li>
                  <li>Total Orders: 27</li>
                </ul>
              </li>
            </ol>

            <h2>Recommendations</h2>
            <ul>
              <li>
                Focus on high-revenue products: Enhance marketing and inventory
                for top performers like S18_3232 and S10_1949 to boost sales
                further.
              </li>
              <li>
                Review pricing strategies: Products with high average prices and
                good sales volumes, such as S10_1949, should be analyzed to
                understand the factors driving their success.
              </li>
            </ul>
            <div>
              <img src={chart} alt="chart" height="800px" width="800px" />
              <p>
                <ol>
                  <li>
                    <b>Total Revenue Over Time:</b> Shows fluctuations in
                    revenue over the months, with peaks indicating higher sales
                    volumes or higher-priced product sales in those periods.
                  </li>
                  <li>
                    <b>Total Units Sold Over Time:</b> Tracks the number of
                    units sold monthly, with the peaks aligning with increased
                    sales activities or successful promotional campaigns
                  </li>
                  <li>
                    <b>Average Price Per Unit Over Time:</b> Provides insights
                    into pricing strategy adjustments, with peaks suggesting
                    months where higher-priced items might have been more
                    dominant in sales.
                  </li>
                </ol>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-3 m-2"
          >
            <h2>The top 5 cities</h2>
            <ol>
              <li className="mt-2">
                Madrid
                <ul>
                  <li>Total Revenue: $1,082,551.44</li>
                  <li>Total Units Sold: 10,958</li>
                  <li>Total Orders: 31</li>
                </ul>
              </li>
              <li className="mt-2">
                San Rafael
                <ul>
                  <li>Total Revenue: $654,858.06</li>
                  <li>Total Units Sold: 6,366</li>
                  <li>Total Orders: 17</li>
                </ul>
              </li>
              <li className="mt-2">
                NYC
                <ul>
                  <li>Total Revenue: $560,787.77</li>
                  <li>Total Units Sold: 5,294</li>
                  <li>Total Orders: 16</li>
                </ul>
              </li>
              <li className="mt-2">
                Singapore
                <ul>
                  <li>Total Revenue: $288,488.41</li>
                  <li>Total Units Sold: 2,760</li>
                  <li>Total Orders: 9</li>
                </ul>
              </li>
              <li className="mt-2">
                Paris
                <ul>
                  <li>Total Revenue: $268,944.68</li>
                  <li>Total Units Sold: 2,521</li>
                  <li>Total Orders: 9</li>
                </ul>
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-3 m-2"
          >
            <h2>Recommendations</h2>
            <p className="ms-3">
              <ul>
                <li>
                  <b>Strategic Marketing in Top Cities:</b> Continue to
                  strengthen marketing efforts in these top cities to maintain
                  and grow the existing customer base and revenue.
                </li>
                <li>
                  <b>Expansion Strategies: </b> Investigate the characteristics
                  of these top-performing cities to identify similar markets.
                  Consider targeted marketing campaigns, opening new stores, or
                  expanding distribution channels in cities with similar
                  demographics or economic conditions.
                </li>
                <li>
                  <b>Compute monthly metrics </b> and plot them to identify
                  trends.
                </li>
                <li>
                  <b>Boosting Other Cities: </b> For cities not performing as
                  well, analyze the differences in product preferences, pricing
                  sensitivities, and promotional effectiveness compared to top
                  cities. Tailored marketing strategies and possibly localized
                  product offerings could enhance performance.
                </li>
              </ul>
            </p>
            <div className="row">
              <div className="col-6">
                <h2>2003-2005 Revenue by Product Line</h2>
                <img
                  src={revenue}
                  alt="revenueChart"
                  height="600px"
                  width="600px"
                />
              </div>
              <div className="col-6">
                <h2>2003-2005 Q'ty Product Line</h2>
                <img src={qty} alt="QtyChart" height="600px" width="600px" />
              </div>
              <div className="col-12 ">
                <h2>Total Sale By Product Line (Ascending Order)</h2>
                <img src={totalSale} alt="totalChart" width="90%" />
              </div>
              <div className="col-12 ">
                <h2>2003-2005 Q'ty By Product Line</h2>
                <img src={totalQty} alt="totalChart" width="90%" />
              </div>
              <div className="col-6 ">
                <h2>Sales By City</h2>
                <img src={salesByCity} alt="salesByCityChart" width="90%" />
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PerformanceOverview;
