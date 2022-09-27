# Tableau connector

## Usage

Usage is similar to [Opensearch JDBC connector](https://github.com/opensearch-project/sql/tree/2.x/bi-connectors/TableauConnector)

1. Put connector [taco file](cx_sql_jdbc.taco) from this repository into
  * Windows: `C:\Users\%USERNAME%\Documents\My Tableau Repository\Connectors`
  * MacOS: `~/Documents/My Tableau Repository/Connectors`
2. Put OpenSearch JDBC driver (jar file) into
  * Windows: `C:\Program Files\Tableau\Drivers`
  * MacOS: `~/Library/Tableau/Drivers`
3. Run Tableau Desktop with command line flag `-DDisableVerifyConnectorPluginSignature=true`:
  * Windows: `C:\Program Files\Tableau\Tableau 2022.1\bin\tableau.exe" -DDisableVerifyConnectorPluginSignature=true`
  * MacOS: `open -n /Applications/Tableau\ Desktop\ 2022.1.app --args -DDisableVerifyConnectorPluginSignature=true`
Adjust the command line according to the Tableau version you have. You can create a shortcut or a script to simplify this step.
4. When you open Tableau select `To a Server` -> `Coralogix by Coralogix`, choose your `region` and input `Logs Query Key` from dashboard


## Development

Install [Tableau connector SDK](https://github.com/tableau/connector-plugin-sdk)

To compile run
```
python3 -m connector_packager.package <path-to-cx_sql_jdbc>
```
`Taco` package will be in `connector-plugin-sdk/connector-packager/packaged-connector/cx_sql_jdbc./taco`

To validate run
```
python3 -m connector_packager.package --validate-only <path-to-cx_sql_jdbc>
```
